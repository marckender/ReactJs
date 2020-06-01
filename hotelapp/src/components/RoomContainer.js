import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}) {
const {loading, sortedRooms, rooms}= context;
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      hello from rooms Container
      < RoomsFilter rooms= {rooms} />
      < RoomsList rooms = {sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomContainer)





//options 2

// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// import {RooConsumer, RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//   return (

//     <RoomConsumer >
//       {
//         value =>{
//           const {loading, sortedRooms, rooms}= value;
//           if (loading) {
//             return <Loading />
//           }

//           return (
//             <div>
//             hello from rooms Container
//             < RoomsFilter rooms= {rooms} />
//             < RoomsList rooms = {sortedRooms} />
//           </div>
//           );
//         }
//       }
//     </RoomConsumer>
  
//   )
// }
