import "./Features.css";
import FeatureCard from "./FeatureCard";
import growImg from "../../images/illustration-grow-together.svg";
import convImg from "../../images/illustration-flowing-conversation.svg";
import usersImg from "../../images/illustration-your-users.svg";
const Features = () => {
  const featureList = [
    {
      image: growImg,
      altMsg: "Discussing through chats",
      title: "Grow Together",
      content: `Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.`,
    },
    {
      image: convImg,
      altMsg: "A group of people having a conversation",
      title: "Flowing Conversations",
      content: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.`,
    },
    {
      image: usersImg,
      altMsg: "Users using the product to converse with each other",
      title: "Your Users",
      content: ` It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.`,
    },
  ];
  return (
    <div className="features-container">
      {featureList.map((feature, index) => (
        <FeatureCard key={index} features={feature} />
      ))}
    </div>
  );
};
export default Features;
