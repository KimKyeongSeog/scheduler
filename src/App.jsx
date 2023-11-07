import DateCard from "./component/DateCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ul className="grid grid-cols-7 gap-4">
        {DateData.map((v, i) => {
          return <DateCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;
