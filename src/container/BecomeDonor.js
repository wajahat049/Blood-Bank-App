import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';


function BecomeDonor(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [blood, setBlood] = useState("");
  const [gender, setGender] = useState("");
  const [health, setHealth] = useState("");
  const [address, setAddress] = useState("");

  const save_data=()=>{
    let donor={
        Name, gender , email , phone , address , blood , health
    }
    database().ref(`/donors/${donor.Name}`).update({donor})

    const storeData = async (donor) => {
      try {
        const jsonValue = JSON.stringify(donor)
        await AsyncStorage.setItem('@DONOR', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

    storeData(donor);
    // props.navigation.navigate("Profile");
  }
  
  
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 50, color: 'red', fontWeight: 'bold',marginBottom:10,textAlign:"center" }}>Become Donor</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
       <View style={{ borderWidth: 3, borderColor: "red", width: "80%", margin: 5 }}>
        <TextInput value={gender} onChangeText={(e) => setGender(e)} placeholder="Gender" />
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput  value={phone} onChangeText={(e)=>setPhone(e)} placeholder="Phone Number"/>
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput value={address} onChangeText={(e)=>setAddress(e)} placeholder="Address"/>
      </View>
      <View style={{borderWidth:3,borderColor:"red",width:"80%", margin:5}}>
        <TextInput value={health} onChangeText={(e)=>setHealth(e)} placeholder="Health"/>
      </View>
      
      <View style={{borderWidth:3,borderColor:"red"}}>
      <Picker
        selectedValue={blood}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setBlood(itemValue)}>
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B-" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>
      </View>
    <View>
      <View style={{marginTop:20, width:150}}>
      <Button  color = "red" style={{fontSize:30}} onPress={()=>save_data()} title="Save"></Button>
      </View>
    </View>
    
    </View>
  );
}

export default BecomeDonor;