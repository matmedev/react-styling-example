import styled, { css } from "styled-components";

const primaryButton = css`
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
  color: white;
  background-color: hsl(240, 5.9%, 10%);

  &:hover {
    background-color: hsla(240, 5.9%, 10%, 0.9);
  }
`;

const secondaryButton = css`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  background-color: transparent;
  border: 1px solid hsl(240, 5.9%, 90%);
    
  &:hover {
    background-color: hsl(240, 4.8%, 95.9%);
  }
`;

const Container = styled.div`
  background: #fafafa;
  height: 100vh;
  width: 100vw;

  display: grid;
  place-items: center;
`;

const Card = styled.div`
  max-width: 350px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
  color: rgb(9, 9, 11);
  background: #fff;
  border: 1px solid hsl(240, 5.9%, 90%);
  border-radius: 12px;
`;

const CardHeader = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 1.5rem 1.5rem;
`;

const CardParagraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgb(113, 113, 122);
`;

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button<{ variant : "primary" | "secondary" }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 6px;
  
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return primaryButton;
      case "secondary":
        return secondaryButton;
    }
  }}
`;

function CssInJsPage() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Example card</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardParagraph>
                        Accusantium at commodi et fuga id illo inventore itaque laboriosam minima molestiae molestias nostrum, numquam pariatur placeat porro possimus quam quo quos repellat sunt suscipit totam voluptate voluptatibus! Animi architecto magni nam qui quo.
                    </CardParagraph>
                    <CardParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum laboriosam placeat rem ullam. Consequuntur earum molestiae optio perspiciatis rem.
                    </CardParagraph>
                </CardBody>
                <CardFooter>
                    <Button type="button" variant="secondary">Cancel</Button>
                    <Button type="button" variant="primary">Confirm</Button>
                </CardFooter>
            </Card>
        </Container>
    );
}

export default CssInJsPage;
