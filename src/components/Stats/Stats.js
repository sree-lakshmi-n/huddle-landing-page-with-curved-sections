import "./Stats.css";
import StatsCard from "./StatsCard";
import communityIcon from "../../images/icon-communities.svg";
import msgIcon from "../../images/icon-messages.svg";

const Stats = () => {
  const statsData = [
    {
      key: 1,
      icon: communityIcon,
      altMsg: "community icon",
      data: "1.4k+",
      label: "Communities Formed",
    },
    {
      key: 2,
      icon: msgIcon,
      altMsg: "messaging icon",
      data: "2.7m+",
      label: "Messages Sent",
    },
  ];
  return (
    <div className="stats-container">
      {statsData.map((data) => (
        <StatsCard key={data.key} statsData={data} />
      ))}
    </div>
  );
};
export default Stats;
