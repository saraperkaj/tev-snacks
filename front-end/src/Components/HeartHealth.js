import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth, added_sugar }) {
  const enoughFiber =
    snackHealth < 5 && added_sugar > 5 ? (
      <img src={heartOutline} alt="unhealthy food" />
    ) : (
      <img src={heartSolid} alt="healthy food" />
    );

  return (
    <>
      <p>{enoughFiber}</p>
    </>
  );
}

export default HeartHealth;
