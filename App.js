import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {
  
//  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);

//  const capturarLembrete =(digitado) => {
//    setLembrete(digitado);
//  }

  const adicionarLembrete = (lembrete) => {
    setLembretes((lembretes) => {
      setContadorLembretes(contadorLembretes + 1);
      return[
        {key: contadorLembretes.toString()
          , value: lembrete},
          ...lembretes];
      });
    console.log(lembrete);
  }

  const apagarLembretes = () => {
    setLembretes([]);
  }

  const removerLembrete = (keyASerRemovida) =>{
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key != keyASerRemovida
      })
    })
  }

  return (
    <View style={styles.telaPricipalView}>
     
        <LembreteInput 
          onAdicionarLembrete={adicionarLembrete}
          onApagarTudo={apagarLembretes}
        />
        <View>
          {//aqui será exibida a lista lembretes
          
          }
          <FlatList
            data={lembretes}
            renderItem={
              lembrete => (
                <LembreteItem 
                  chave={lembrete.item.key}
                  lembrete={lembrete.item.value}
                  onDelete={removerLembrete}
                />
              )
            }
          />
        </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  telaPricipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 2

  },
  itemNaLista:{
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize:16,
    width: '80%',
    alignSelf: 'center'
  },
});
