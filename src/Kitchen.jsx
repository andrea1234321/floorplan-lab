import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <>
      <div class="appliances">
        <div class="oven">
          <Oven/>
        </div>
        <div class="sink">
          <Sink/>
        </div>
      </div>
      <h3>Kitchen</h3>
    </>
  )
}
 
export default Kitchen;