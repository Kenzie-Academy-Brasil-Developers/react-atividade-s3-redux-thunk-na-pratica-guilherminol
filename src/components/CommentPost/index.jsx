import { UserImg, Container, Profile } from "./style.js";
const CommentPost = ({ str }) => {
  return (
    <>
      <Container>
        <Profile>
          <UserImg
            alt="user image"
            src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
          />
          <h3>Você</h3>
        </Profile>
        <p> {str} </p>
      </Container>
    </>
  );
};
export default CommentPost;
