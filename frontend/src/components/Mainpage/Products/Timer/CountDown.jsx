import { useTimer } from '@/components/hooks/useTimer';

function CountDown() {
  const { days, hours, minutes, seconds, formatTimeValue } = useTimer();

  return (
    <div className={`flex gap-10`}>
      <div className={`flex flex-col `}>
        <span>Days:</span> <span className={`font-bold text-2xl`}>{days}</span>{' '}
      </div>
      <div className={`flex flex-col `}>
        <span>Hours:</span>{' '}
        <span className={`font-bold text-2xl`}>{formatTimeValue(hours)}</span>{' '}
      </div>
      <div className={`flex flex-col `}>
        <span>Minutes:</span>{' '}
        <span className={`font-bold text-2xl`}>{formatTimeValue(minutes)}</span>{' '}
      </div>
      <div className={`flex flex-col `}>
        <span>Seconds:</span>{' '}
        <span className={`font-bold text-2xl`}>{formatTimeValue(seconds)}</span>{' '}
      </div>
    </div>
  );
}

export default CountDown;
