import { useState, useEffect, useRef } from 'react';
import { Button } from '@/ui/components';
import { Pause, Save, Activity, Mic } from 'lucide-react';
import { AnimatedPictogram } from '../animated-pictogram';

type Status = 'idle' | 'recording' | 'paused';

export function RecordingBody() {
  const [status, setStatus] = useState<Status>('idle');
  const [transcript, setTranscript] = useState<string>('');
  const [finalTranscript, setFinalTranscript] = useState<string>('');
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false);
      return;
    }

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscriptPart = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscriptPart += transcriptPart;
        } else {
          interimTranscript += transcriptPart;
        }
      }

      setFinalTranscript((prev) => prev + finalTranscriptPart);
      setTranscript((prev) => prev + finalTranscriptPart + interimTranscript);
    };

    recognition.onend = () => {
      if (status === 'recording') {
        // If it stops unexpectedly while recording, restart it
        recognition.start();
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        alert('Microphone access was denied. Please allow microphone access in your browser settings and refresh the page.');
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [status]);

  const startRecording = () => {
    if (!isSupported) {
      alert('Speech recognition is not supported in this browser. Please try Chrome or Edge.');
      return;
    }

    setTranscript('');
    setFinalTranscript('');
    setStatus('recording');

    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const pauseRecording = () => {
    setStatus('paused');
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const discardRecording = () => {
    setStatus('idle');
    setTranscript('');
    setFinalTranscript('');
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const saveRecording = async () => {
    // TODO Remove the return
    return;

    if (!finalTranscript.trim()) {
      alert('No transcript to save');
      return;
    }

    try {
      const webhookUrl = 'https://n8n.zolverz.com/webhook/4df2111e-46e0-4c60-ad56-9a1c35da9856';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcript: finalTranscript.trim(),
          recordedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`n8n webhook returned status ${response.status}`);
      }

      // Reset after success
      setTimeout(() => {
        setStatus('idle');
        setTranscript('');
        setFinalTranscript('');
      }, 2000);
    } catch (error) {
      console.error('Error sending note to n8n:', error);
    }
  };

  switch (status) {
    case 'recording':
      return (
        <>
          <RecordingBodyWithTranscript isRecording={true} transcript={transcript || 'Listening...'} />
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="ghost" rounded className="w-full px-0" onClick={discardRecording}>
              Discard
            </Button>
            <Button variant="outline" rounded onClick={pauseRecording}>
              <Pause className="w-4 h-4" />
              Pause
            </Button>
          </div>
        </>
      );
    case 'paused':
      return (
        <>
          <RecordingBodyWithTranscript isRecording={false} transcript={transcript || 'No transcript available'} />
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="ghost" rounded className="w-full px-0" onClick={discardRecording}>
              Discard
            </Button>
            <Button variant="outline" rounded className="w-full px-0" onClick={saveRecording}>
              <Save className="w-4 h-4" />
              Save
            </Button>
          </div>
        </>
      );
    case 'idle':
    default:
      return (
        <>
          <div className="flex flex-col gap-2 h-full items-center pt-10">
            <span className="text-text-secondary font-medium text-2xl text-center max-w-[200px]">What are you thinking today?</span>
            <AnimatedPictogram />
          </div>
          <div className="grid grid-cols-2 gap-2 w-full justify-center">
            <Button variant="outline" rounded className="w-full">
              <Activity className="w-4 h-4" />
              Interact
            </Button>
            <Button variant="outline" rounded className="w-full" onClick={startRecording}>
              <Mic className="w-4 h-4" />
              Record
            </Button>
          </div>
        </>
      );
  }
}

function RecordingBodyWithTranscript({ isRecording, transcript }: { isRecording: boolean; transcript: string }) {
  return (
    <div className="flex flex-col gap-2 h-full items-center pt-2 overflow-hidden">
      <div className="flex items-center gap-2">
        <span className={`text-center font-medium ${isRecording ? 'text-brand-500 animate-pulse' : ''}`}>
          {isRecording ? 'Recording...' : 'Recording paused'}
        </span>
      </div>
      <div className="text-gray-500 text-sm w-full overflow-auto flex-1">{transcript}</div>
    </div>
  );
}
