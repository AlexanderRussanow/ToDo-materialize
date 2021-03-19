import React, { ComponentType } from "react";
import { compose } from "redux";

function HOC1<WP extends { hipHop: number }>(
  WrappedComponent: ComponentType<WP>
) {
  const ContainerComponent: React.FC<Omit<WP, "hipHop">> = (props) => {
    return (
      <div>
        <WrappedComponent {...(props as WP)} hipHop={18} />
      </div>
    );
  };
  return ContainerComponent;
}

function DanceHOC<WP extends { dance: number }>(
  NewComponent: ComponentType<WP>
) {
  const ContainerComponent: React.FC<Omit<WP, "dance">> = (props) => {
    return (
      <div>
        <NewComponent {...(props as WP)} dance={18} />
      </div>
    );
  };
  return ContainerComponent;
}

type C1Type = {
  title: string;
  hipHop: number;
  readonly dance: number;
  isDancing?: boolean
};


const letMiSpeakFromMyHurt: C1Type = {
    title: "hey hey hey",
    dance: 5,
    hipHop: 8
}




type Style = {
    [key: string] : string
}

const testShemst: Style = {
    name: "horos"
    lastName: "davaj davaj" 
}

const newOne: C1Type = {
    title: "hey hey hey",
    dance: 5,
    hipHop: 8,
    isDancing: true
}

newOne.isDancing = false
letMiSpeakFromMyHurt.dance = 22

const C1: React.FC<C1Type> = (props) => {
  return <div>{props.title}</div>;
};

// const C1Container = HOC1(C1);

// const C2Container = DanceHOC(C1Container);

const SuperHOC = compose<ComponentType<C1Type>>(DanceHOC, HOC1)(C1);

const App = () => {
  return <C2container title={"sexy"} />;
};

// const f1 = (a: number) => "12"
// const f2 = (b: number) => 114

// const result = compose (
//     f2,
//     f1) (18)

// result = 11111
