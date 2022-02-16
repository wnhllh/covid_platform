// import React from "react";
// import styled from "styled-components";

// import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";

// import form from "./form.json";

// import CheckboxInput from "./components/CheckboxInput";
// import RadioInput from "./components/RadioInput";
// import ShortAnswerInput from "./components/ShortAnswerInput";
// import LongAnswerInput from "./components/LongAnswerInput";
// import RadioGridInput from "./components/RadioGridInput";
// import CheckboxGridInput from "./components/CheckboxGridInput";
// import DropdownInput from "./components/DropdownInput";
// import LinearGrid from "./components/LinearGrid";

// const Form = styled.form`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 50px 0;
// `;

// const QuestionContainer = styled.div`
//   margin-bottom: 20px;
// `;

// const QuestionLabel = styled.h3`
//   margin-bottom: 10px;
// `;

// const Questions = () => {
//   return (
//     <div>
//       {form.fields.map((field) => {
//         const { id } = field;

//         let questionInput = null;
//         switch (field.type) {
//           case "CHECKBOX":
//             questionInput = <CheckboxInput id={id} />;
//             break;
//           case "RADIO":
//             questionInput = <RadioInput id={id} />;
//             break;
//           case "SHORT_ANSWER":
//             questionInput = <ShortAnswerInput id={id} />;
//             break;
//           case "LONG_ANSWER":
//             questionInput = <LongAnswerInput id={id} />;
//             break;
//           case "RADIO_GRID":
//             questionInput = <RadioGridInput id={id} />;
//             break;
//           case "CHECKBOX_GRID":
//             questionInput = <CheckboxGridInput id={id} />;
//             break;
//           case "DROPDOWN":
//             questionInput = <DropdownInput id={id} />;
//             break;
//           case "LINEAR":
//             questionInput = <LinearGrid id={id} />;
//             break;
//           default:
//             return null;
//         }

//         if (!questionInput) {
//           return null;
//         }

//         return (
//           <QuestionContainer key={id}>
//             <QuestionLabel>{field.label}</QuestionLabel>
//             {questionInput}
//           </QuestionContainer>
//         );
//       })}
//     </div>
//   );
// };

// const App = () => {
//   const methods = useGoogleForm({ form });
//   const onSubmit = async (data) => {
//     console.log(">>> Here is the data", data);
//     await methods.submitToGoogleForms(data);
//     alert("Form submitted with success!");
//   };

//   console.log(">>> Here are the errors!!!", methods.formState.errors);

//   return (
//     <GoogleFormProvider {...methods}>
//       <Form onSubmit={methods.handleSubmit(onSubmit)}>
//         <Questions />
//         <button type="submit">Submit</button>
//       </Form>
//     </GoogleFormProvider>
//   );
// };

// export default App;

import React from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";


 export default class App extends React.Component{

  constructor() {
    super();
     this.state = {
        name: '',
        mail: '',
        Password: ''
    }
  }

  submit()
  {
    console.log(this.state)
  }

  render() {
  return (
    <View style={styles.app}>
      <TextInput
          placeholder=" Revenue"
          onChangeText={(text) => { this.setState({name: text})}}
          style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10}}
          />
      <TextInput
          placeholder=" Covid-19 symptoms"
          onChangeText={(text) => { this.setState({mail: text})}}
          style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10}}
          />
      <TextInput
          placeholder=" Rating "
          secureTextEntry={true}
          maxLength={5}
          onChangeText={(text) => { this.setState({Password: text})}}
          style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10, marginBottom:10}}
          /> 
      <TextInput
          placeholder=" Reviews"
          secureTextEntry={true}
          maxLength={5}
          onChangeText={(text) => { this.setState({Password: text})}}
          style={{borderWidth:2, borderColor:'#000',padding:10, marginTop:10, marginBottom:10}}
          /> 
       <Button title="submit" onPress={()=>{this.submit()}} />            
    </View>
  );
}}

const styles = StyleSheet.create({
  app: {
     
     margin:20,
     marginTop:100
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },

});

