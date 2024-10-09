export * from './Pomodoro'


 // Funções para alterar os tempos
 const handleWorkTimeChange = (e) => setWorkTime(Number(e.target.value) * 60);
 const handleShortBreakTimeChange = (e) => setShortBreakTime(Number(e.target.value) * 60);
 const handleLongBreakTimeChange = (e) => setLongBreakTime(Number(e.target.value) * 60);
 const handleCyclesChange = (e) => setCyclesBeforeLongBreak(Number(e.target.value));

 // Propriedades do círculo
 const radius = 45;
 const circumference = 2 * Math.PI * radius;
 const progress = time / (isWork ? workTime : (cycleCount >= cyclesBeforeLongBreak ? longBreakTime : shortBreakTime)) * 100;
 const strokeDashoffset = circumference - (progress / 100) * circumference;


//  <svg className="progress-ring" width="120" height="120">
//  <circle
//      className="progress-ring__circle"
//      stroke="blue"
//      strokeWidth="5"
//      fill="transparent"
//      r={radius}
//      cx="60"
//      cy="60"
//      style={{
//      strokeDasharray: circumference,
//      strokeDashoffset: strokeDashoffset,
//      }}
//  />
// </svg>