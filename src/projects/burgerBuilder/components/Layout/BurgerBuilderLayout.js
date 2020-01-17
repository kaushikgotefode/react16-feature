import React from "react";
import ContainerComponent from "../../../../components/hodComponents/ContainerComponent";
import BurgerBuilder from "../../container/BurgerBuilderComponent";

export default function BurgerBuilderLayout(props) {
  return <ContainerComponent>
    <div>sidebar, header, backdrop</div>
    <main>
      <BurgerBuilder></BurgerBuilder>
    </main>
  </ContainerComponent>;
}
