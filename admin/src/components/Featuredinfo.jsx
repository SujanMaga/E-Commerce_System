import React from "react";
import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 4;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedIcon = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: ${(props) => (props.negative ? "red" : "green")};
`;

const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;
const Featuredinfo = () => {
  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$ 22222</FeaturedMoney>
          <FeaturedMoneyRate>-11.2</FeaturedMoneyRate>
          <FeaturedIcon negative>
            <ArrowDownward />
          </FeaturedIcon>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$ 4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4
            <FeaturedIcon negative>
              <ArrowDownward />
            </FeaturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$ 2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4
            <FeaturedIcon>
              <ArrowUpward />
            </FeaturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
};

export default Featuredinfo;
