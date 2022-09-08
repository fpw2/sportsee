import Header from "./Header";
import Activities from "./dashboard/Activities";
import Sessions from "./dashboard/Sessions";
import Performance from "./dashboard/Performance";
import Score from "./dashboard/Score";
import Calories from "./dashboard/Calories";
import { icon } from "../data/icon";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchUser,
  fetchActivity,
  fetchAverageSessions,
  fetchPerformance,
} from "../service/apiService"; // for use back change into ../service/apiService

/**
 * Display the dashboard with all graph and cards
 * @returns Dashboard
 */
export default function Dashboard() {
  let navigate = useNavigate()
  // const {userId} = useParams()
  const [firstName, setFirstname] = useState();
  const [score, setScore] = useState();
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();
  const [carbs, setCarbs] = useState();
  const [fat, setFat] = useState();
  const [activity, setActivity] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    fetchUser(12).then((data) => {
      const { firstName, score, calories, protein, carbs, fat } = data;
      setFirstname(firstName);
      setScore(score);
      setCalories(calories);
      setProtein(protein);
      setCarbs(carbs);
      setFat(fat);
    }).catch(error => {
      console.log(error)
      navigate('/error', {replace:true})
    })

    fetchActivity(12).then((data) => {
      setActivity(data);
    }).catch(error => {
      console.log(error)
      navigate('/error', {replace:true})
    })

    fetchAverageSessions(12).then((data) => {
      setSessions(data);
    }).catch(error => {
      console.log(error)
      navigate('/error', {replace:true})
    })
    
    fetchPerformance(12).then((data) => {
      setPerformance(data);
    }).catch(error => {
      console.log(error)
      navigate('/error', {replace:true})
    })

  }, [navigate]);

  return (
    <div className="dashboard">
      <Header firstName={firstName} />
      <div className="result">
        <div className="container-graph">
          <Activities activity={activity} />
          <div className="grid">
            <Sessions sessions={sessions} />
            <Performance performance={performance} />
            <Score score={score} />
          </div>
        </div>
        <Calories
          icon={icon}
          calories={calories}
          protein={protein}
          carbs={carbs}
          fat={fat}
        />
      </div>
    </div>
  );
}
