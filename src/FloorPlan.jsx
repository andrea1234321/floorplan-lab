import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <>
      <div class="upper">
        <div class="upper-left">
          <div class="bedroom-one">
            <Bedroom bedNum={1}/>
          </div>
          <div class="full-bath">
            <Bath size={"Full"}/>
          </div>
        </div>
        <div class="upper-right">
          <div class="living-room">
            <LivingRoom/>
          </div>
          <div class="kitchen">
            <Kitchen/>
          </div>
        </div>
      </div>
      <div class="lower">
        <div class="bedroom-two">
          <Bedroom bedNum={2}/>
        </div>
        <div class="half-bath">
          <Bath size={"Half"}/>
        </div>
        <div class="bedroom-three">
          <Bedroom bedNum={3}/>
        </div>
      </div>
    </>
  )
}
 
export default FloorPlan;