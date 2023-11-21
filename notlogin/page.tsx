// "use client";

// import {
//   Button,
//   Card,
//   CardContent,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { SignUpModal } from "../../components/SignUpModal";
// import Link from "next/link";
// import { useState } from "react";

// export default function Login() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <Stack style={{ backgroundColor: "#F8EBDE", flexGrow: 1 }}>
//       <Stack
//         direction={{ sm: "column", md: "row" }}
//         spacing={6}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           height: "100%",
//           alignItems: "center",
//           backgroundColor: "#F8EBDE",
//           overflow: "auto",
//           padding: "0",
//         }}
//       >
//         <Card
//           raised={true}
//           sx={{
//             backgroundColor: "#542F12",
//             height: "40%",
//             width: { xs: "70%", sm: "60%", md: "30%" },
//             maxWidth: "300px",
//             marginBottom: { xs: "20px", sm: "0px" },
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Card
//             raised={true}
//             style={{
//               backgroundColor: "#F8EBDE",
//               height: "90%",
//               width: "90%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <CardContent>Logo Goes Here</CardContent>
//           </Card>
//         </Card>
//         <Card
//           raised={true}
//           sx={{
//             backgroundColor: "#542F12",
//             height: "40%",
//             width: { xs: "70%", sm: "60%", md: "30%" },
//             maxWidth: "300px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <CardContent>
//             <Stack spacing={2}>
//               <Stack spacing={2}>
//                 <Button style={{ backgroundColor: "#4E8448" }}>
//                   <Typography style={{ color: "#F8EBDE" }}>
//                     Google login
//                   </Typography>
//                 </Button>
//                 <Stack style={{ alignItems: "center" }}>
//                   <Typography style={{ color: "#F8EBDE" }}>
//                     ------ OR ------
//                   </Typography>
//                 </Stack>
//               </Stack>

//               <Stack spacing={2}>
//                 <TextField
//                   label="email"
//                   variant="outlined"
//                   style={{ backgroundColor: "#F8EBDE", borderRadius: "5px" }}
//                 />
//                 <TextField
//                   label="Password"
//                   variant="outlined"
//                   style={{ backgroundColor: "#F8EBDE", borderRadius: "5px" }}
//                 />

//                 <Stack
//                   direction="row"
//                   style={{ justifyContent: "space-between" }}
//                 >
//                   <Button
//                     style={{ backgroundColor: "#4E8448", width: "40%" }}
//                     onClick={handleOpen}
//                   >
//                     <Typography style={{ color: "#F8EBDE" }}>
//                       Sign Up
//                     </Typography>
//                   </Button>
//                   <Button style={{ backgroundColor: "#4E8448", width: "40%" }}>
//                     <Typography style={{ color: "#F8EBDE" }}>Login</Typography>
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Stack>
//           </CardContent>
//         </Card>
//       </Stack>

//       <SignUpModal open={open} handleClose={handleClose} />
//     </Stack>
//   );
// }
