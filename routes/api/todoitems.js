// const express = require('express');
// const router = express.Router();
// const models = require("../../models");

// router.post('/:todoId/items', function(req, res) {
//     models.TodoItem.create({
//       content: req.body.content,
//       todoId: req.params.todoId,
//     })
//     .then(todoItem => res.json(todoItem))
//     .catch(error => res.json(error));
// });

// module.exports = router;
// export interface HLandlordContact {
//     landlord_submitted_building_name: string;
//     landlord_submitted_building_unit: string;
//     landlord_submitted_email_address: string;
//     landlord_submitted_at: string;
//   }
  
//   export function toLandLordContact(
//     landlordContactAttrs: LandlordContact
//   ): HLandlordContact  {
//     const lastletterlowerArray: string[] = Object.keys(landlordContactAttrs).map( (key: String) => {
//       let str = "";
//       key.split("").forEach( (word, index) => {
//         if (index === 1) {
//           str += word.charAt(0).toLowerCase() + word.slice(1);
//         } else {
//           str += word;
//         }
//       });
//       return str;
//     });
//     const formattedArray = lastletterlowerArray.map
//     console.log(landlordContactAttrs, "TODO: transform to required type");
//     return {} as any;
//   }