"use client";
import { useEffect, useRef, useState } from "react";
import { Music, Pause, Volume2, VolumeX } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Slider } from "@/components/ui/slider";
export function MusicSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [prevVolume, setPrevVolume] = useState(0.5);
    const audioRef = useRef(null);
    const { ref, isVisible } = useScrollAnimation();
    const ensureAudio = () => {
        if (!audioRef.current) {
            const audio = new Audio("/iris.mp3");
            audio.preload = "auto";
            audio.volume = volume;
            audioRef.current = audio;
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);
            const handleEnded = () => setIsPlaying(false);
            audio.addEventListener("play", handlePlay);
            audio.addEventListener("pause", handlePause);
            audio.addEventListener("ended", handleEnded);
            audio._handlers = { handlePlay, handlePause, handleEnded };
        }
        return audioRef.current;
    };
    const toggleMusic = () => {
        const audio = ensureAudio();
        if (audio.paused) {
            audio
                .play()
                .then(() => {
            })
                .catch(() => {
            });
        }
        else {
            audio.pause();
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);
    useEffect(() => {
        try {
            const pref = typeof window !== 'undefined' ? localStorage.getItem('music_pref') : null;
            if (pref === 'on') {
                const a = ensureAudio();
                a.play().catch(() => { });
            }
            else if (pref === 'off') {
                if (audioRef.current)
                    audioRef.current.pause();
            }
        }
        catch (_a) { }
        const onPlay = () => {
            const a = ensureAudio();
            a.play().catch(() => { });
        };
        const onPause = () => {
            if (audioRef.current)
                audioRef.current.pause();
        };
        window.addEventListener('play-music', onPlay);
        window.addEventListener('pause-music', onPause);
        return () => {
            const audio = audioRef.current;
            if (audio) {
                try {
                    audio.pause();
                }
                catch (_a) { }
                const h = audio._handlers;
                if (h) {
                    audio.removeEventListener("play", h.handlePlay);
                    audio.removeEventListener("pause", h.handlePause);
                    audio.removeEventListener("ended", h.handleEnded);
                }
            }
            window.removeEventListener('play-music', onPlay);
            window.removeEventListener('pause-music', onPause);
        };
    }, []);
    const onVolumeChange = (vals) => {
        var _a;
        const v = ((_a = vals === null || vals === void 0 ? void 0 : vals[0]) !== null && _a !== void 0 ? _a : 0) / 100;
        setVolume(v);
        if (v > 0)
            setPrevVolume(v);
    };
    const toggleMute = () => {
        if (volume > 0) {
            setPrevVolume(volume);
            setVolume(0);
        }
        else {
            setVolume(prevVolume || 0.5);
        }
    };
    return (<section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#1e3a5f] to-[#0d1f3a] relative overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <button onClick={toggleMusic} aria-pressed={isPlaying} aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"} className={`group relative w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center transition-all duration-700 hover:scale-110 hover:bg-white/20 animate-pulse-glow ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          {isPlaying ? <Pause className="w-10 h-10 text-white"/> : <Music className="w-10 h-10 text-white"/>}
        </button>
        <p className={`text-white text-lg font-light transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {isPlaying ? "Pausa mi canción" : "Reproduce mi canción"}
        </p>

        {/* Volume controls - Spotify style (blue) */}
        <div className={`mt-6 mx-auto max-w-sm px-4 flex items-center gap-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} transition-all duration-700`}>
          <button onClick={toggleMute} aria-label={volume === 0 ? "Activar volumen" : "Silenciar"} className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/90">
            {volume === 0 ? <VolumeX className="w-5 h-5"/> : <Volume2 className="w-5 h-5"/>}
          </button>
          <Slider value={[Math.round(volume * 100)]} min={0} max={100} onValueChange={onVolumeChange} aria-label="Control de volumen" className="group w-full [&_[data-slot=slider-track]]:bg-white/20 [&_[data-slot=slider-track]]:backdrop-blur-sm [&_[data-slot=slider-range]]:bg-gradient-to-r [&_[data-slot=slider-range]]:from-sky-400 [&_[data-slot=slider-range]]:to-blue-600 [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:border-sky-400 [&_[data-slot=slider-thumb]]:shadow-lg"/>
        </div>
      </div>
    </section>);
}
