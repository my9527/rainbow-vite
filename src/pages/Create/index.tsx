import styled from "styled-components";
import TextField from "./TextField";
import { Controller, useForm } from 'react-hook-form';
import BigDinoGif from "../../components/BigDinoGif";
import MiniDinoGif from "../../components/MiniDinoGif";

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 3px solid #057003;
  flex-grow: 1;
  flex-direction: column;
`
const LeftInner = styled.div`
  width: 1040px;
  margin: 0 auto;
  position: relative;
`
const Content = styled.div`
  display: flex;
  gap: 40px;
`
const Label = styled.label`
  font-size: 14px;
  margin: 10px 0;
  display: block;
  white-space: nowrap;
  font-weight: 700;
`
const Col = styled.div`
  width: 500px;
`

const StyledTextField = styled(TextField)`
  margin-top: 9px;
`

const MintPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 63px;
`

const DescriptionText = styled.div`
  font-family: Handjet;
  font-size: 14px;
  font-weight: 700;
  margin-top: 39px;
`

const Title = styled.h2`
  font-family: Handjet;
  font-size: 60px;
  font-weight: 700;
  margin-top: 29px;
  margin-bottom: 18px;
  text-align: left;
`

const StyledMiniDinoGif = styled(MiniDinoGif)`
  position: absolute;
  top: 43px;
  right: 0;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 77px;
`

type TDeployParams = {
  tokenName: string,
  chain: string,
  totalSupply: string,
  totalAmount: string,
  perMintMin: string,
  perMintMax: string,
  mintPrice: string,
}
const Create = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tokenName: '',
      chain: 'Base',
      totalSupply: '',
      totalAmount: '',
      mintPrice: '',
      perMintMin: '0.001',
      perMintMax: '0.00',
      tokenSymbol: ''
    }
  })

  const handleDeploy = (data: TDeployParams) => {
    console.log('xxxx form data', data)
  }


  console.log('xxx errors', errors)
  return (
    <Wrapper>
      <Left>
        <LeftInner>
          <Title>Set your protocol Parameters</Title>
          <Content>
            <Col>
              <Label>Token Name</Label>
              <Controller
                name="tokenName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} error={!!errors?.tokenName} />}
              />
            <Label>Total Supply</Label>
              <Controller
                name="totalSupply"
                control={control}
                render={({ field }) => <TextField {...field} suffix="ETH" />}
              /> 
              <Label>Mint Price</Label>
              <MintPrice>
                <Controller
                  name="mintPrice"
                  control={control}
                  render={({ field }) => <TextField {...field} suffix={"Token"} />}
                />
                <Label>/ 0.001ETH</Label>
              </MintPrice>
              <Label>Total Amount</Label>
              <Controller
                name="totalAmount"
                control={control}
                render={({ field }) => <TextField {...field} readonly />}
              />     
              <Label>Per Mint</Label>
              <Controller
                name="perMintMin"
                control={control}
                render={({ field }) => (
                  <TextField 
                    {...field} 
                    prefix="Min" 
                    suffix="ETH"
                    readonly 
                    inputAlign="right"
                  />
                )}
              />
              <Controller
                name="perMintMax"
                control={control}
                render={({ field }) => (
                  <StyledTextField 
                    {...field} 
                    prefix="Max" 
                    suffix="ETH"
                    inputAlign="right"
                  />
                )}
              />
              <Footer>
                <button>Cancel</button>
                <button onClick={handleSubmit(handleDeploy)}>Deploy</button>
              </Footer>
            </Col>
            <Col>
            <Label>Token Symbol</Label>
              <Controller
                name="tokenSymbol"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <Label>Chain</Label>
              <Controller
                name="chain"
                control={control}
                render={({ field }) => <TextField {...field} readonly />}
              />
              <DescriptionText>*At this stage, ERC50 Launchpad Deployment is freely available to users. In the future, there will be a certain amount of $Dino charged.</DescriptionText>
            </Col>
          </Content>
          <StyledMiniDinoGif />
      
        </LeftInner>
      </Left>
      <BigDinoGif />
    </Wrapper>
  );
};
export default Create;
