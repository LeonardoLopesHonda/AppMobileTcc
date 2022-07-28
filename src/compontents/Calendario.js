import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native'
import { LocaleConfig, Agenda } from 'react-native-calendars'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 

LocaleConfig.locales['tr'] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio" ,"Junho" ,"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  dayNames: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
  dayNamesShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]
}

LocaleConfig.defaultLocale = "tr"

const Calendario = () => {

  const [modalVisible, setModalVisible] = useState(false);

  // informações que serão adicionadas ao calendário
  const [events, setEvents] = useState('');
  const [dateSelected, setDateSelected] = useState('');
  const [description, setDescription] = useState('');
  const [refreshCalender, setRefreshCalender] = useState(false);

  /*const diaNovo = new Date();
  const dateFormated = diaNovo.getFullYear()+'-'+String((diaNovo.getMonth()+1)).padStart(2,'0')+'-'+String(diaNovo.getDate()).padStart(2,'0');*/

  const dat = new Date(dateSelected);
  const yr = dat.getFullYear();
  const mt = dat.getMonth()+1;
  const dt = dat.getDate();
  if (dt < 10) {
    dt = '0' + dt;
  }
  if(mt < 10) {
    mt = '0' + mt;
  }
  strDate = (yr+'-'+mt+'-'+dt);

  const renderItem = (item) => {
    return(
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
        <Text>{item.details}</Text>
    </View>
    )
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDateSelected(date);
    hideDatePicker();
  };

  return (
    <>
        <Agenda
          items={ {[strDate] : [{title: events, details: description}]} }
          renderEmptyDate={() => {
            return <View />;
          }}
          renderEmptyData={() => {
            return <View />;
          }}
          selected={new Date()}
          minDate={null}
          renderItem={renderItem}
          //markedDates={item.data}
          markingType="custom"
          refreshing={refreshCalender}
        />
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>

              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Adicione um horário</Text>

                  <TextInput 
                    placeholder='Título'
                    onChangeText={(text) => setEvents(text)}
                    style={styles.input}
                  />

                  <TextInput 
                    placeholder='Descrição'
                    onChangeText={(text) => setDescription(text)}
                    style={styles.input}
                  />

                  <TouchableOpacity
                    style={styles.btnDatePicker}
                    onPress={showDatePicker}
                  >
                    <Text>Selecionar data</Text>
                    <Fontisto name="date" size={20} color="#fff" style={{ margin: 10 }} />
                  </TouchableOpacity>

                  <DateTimePicker
                    mode='date'
                    minimumDate={null}
                    isVisible={isDatePickerVisible}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />

                  <TouchableOpacity
                    style={[styles.button2, styles.buttonClose2]}
                    onPress={() => {
                      console.log(events)
                      console.log(description)
                      console.log(dateSelected)
                      console.log(strDate)

                      setModalVisible(false)
                      }}>
                    <Text style={styles.textStyle}>
                      <Ionicons name="checkmark-sharp" size={24} color="black" />
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>
                      <Feather name="x-circle" size={24} color="black" />
                    </Text>
                  </TouchableOpacity>

                </View>
              </View>
            </Modal>

            <TouchableOpacity style={styles.btn}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons name={'add-outline'} size={30} color={'black'}/>
            </TouchableOpacity>
          </View>
    </>
  )
}

export default Calendario

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: "90%",
    height: "60%",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 15,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    left: 0,
    bottom: 0,
    margin: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonClose2: {
    backgroundColor: '#9beb34',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 24,
    margin: 10
  },
  btn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    margin: 15
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#313131"
  },
  dateComponent: {
    width: "60%",
    marginTop: 20,
    marginBottom: 5,
  },
  btnDatePicker: {
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#0782F9",
    marginTop: 20,
    width: "40%",
    borderRadius: 15,
  },
});