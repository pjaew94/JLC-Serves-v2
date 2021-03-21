import { FC } from "react";
import Achievements from "../../components/Achievements/Achievements";
import Landing from '../../components/Landing/Landing';
import ThankYou from "../../components/ThankYou/ThankYou";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeDo from './../../components/WhatWeDo/WhatWeDo';


const Home: FC = () => {
  return <>
  <Landing />
  <Achievements />
  <WhoWeAre />
  <WhatWeDo />
  <ThankYou />
  </>;
};

export default Home;
