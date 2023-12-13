import { useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

type DetailsPostParamsProps = {
  id: string;
};

export default function DetailsPost() {
  const { id } = useRoute().params as DetailsPostParamsProps;
  const [feedback, setFeedback] = useState<'yes' | 'no' | ''>('');

  useEffect(() => {
    console.log('ID PARAMS', id);
  }, [id]);

  useMemo(() => {
    if (feedback) {
      console.log(feedback);
    }
  }, [feedback]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#295094',
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 100,
      }}
      nestedScrollEnabled
    >
      <Text
        style={{
          fontFamily: 'Rubik_700Bold',
          color: '#fff',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        React Native está cada vez mais evoluido
      </Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/logo-og.png',
        }}
        style={{
          width: '85%',
          height: 180,
          borderRadius: 10,
          marginTop: 25,
        }}
      />
      <Text
        style={{
          fontFamily: 'Rubik_300Light',
          fontSize: 16,
          color: '#fff',
          marginHorizontal: 22,
          marginTop: 28,
        }}
      >
      A equipe por trás do React Native tem trabalhado arduamente para 
fornecer atualizações e melhorias constantes na plataforma. Isso 
se deve, em grande parte, à sua comunidade ativa de desenvolvedores,
 que está sempre procurando maneiras de aprimorar a tecnologia. 
Entre as tendências e melhorias que podemos observar estão: 
Novas bibliotecas e componentes Ferramentas de depuração aprimoradas
Como o React Native está moldando o futuro do desenvolvimento de 
aplicativos.O React Native está revolucionando o desenvolvimento de 
aplicativos móveis ao oferecer uma abordagem única para a criação de
 interfaces de usuário nativas. Sua arquitetura flexível e o uso de
 JavaScript como linguagem de programação tornam mais fácil para os
 desenvolvedores criar aplicativos para iOS e Android simultaneamente. 
Além disso, o React Native também oferece:
      </Text>
      <Text
        style={{
          fontFamily: 'Rubik_500Medium',
          color: '#fff',
          marginTop: 30,
          fontSize: 16,
        }}
      >
        Esse artigo foi útil para você?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: feedback === 'yes' ? '#000' : '#d9d9d9',
            width: 120,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          onPress={() => setFeedback('yes')}
        >
          <Text
            style={{
              fontFamily: 'Rubik_600SemiBold',
              color: feedback === 'yes' ? '#eee' : '#111',
            }}
          >
            Sim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: feedback === 'no' ? '#000' : '#d9d9d9',
            width: 120,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          onPress={() => setFeedback('no')}
        >
          <Text
            style={{
              fontFamily: 'Rubik_600SemiBold',
              color: feedback === 'no' ? '#eee' : '#111',
            }}
          >
            Não
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
