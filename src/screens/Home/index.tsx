import { ScrollView, Text, View, FlatList } from 'react-native';

import { Header } from 'components/Header';
import { Post } from 'components/Post';
import { Float } from 'components/Float';

export default function Home() {
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 40,
          backgroundColor: '#295094',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 100,
        }}
        nestedScrollEnabled
      >
        <Header />
        <ScrollView
          contentContainerStyle={{
            width: '100%',
          }}
          horizontal
          scrollEnabled={false}
        >
          <FlatList
            data={[
              {
                id: 'react-native-evolution',
                title: 'React Native está cada vez mais evoluido',
                body: 'A equipe por trás do React Native tem trabalhado arduamente para fornecer atualizações e melhorias constantes na plataforma, graças à sua comunidade ativa de desenvolvedores. Entre as tendências e melhorias observadas estão: novas bibliotecas e componentes, ferramentas de depuração aprimoradas. O React Native está moldando o futuro do desenvolvimento de aplicativos móveis, revolucionando-o com uma abordagem única para a criação de interfaces de usuário nativas. Sua arquitetura flexível e o uso de JavaScript como linguagem de programação facilitam aos desenvolvedores a criação de aplicativos para iOS e Android simultaneamente. Além disso, o React Native também oferece...'
,
                image: 'https://reactnative.dev/img/logo-og.png',
              },
              {
                id: 'react-native-evolution-part-two',
                title: 'React Native está cada vez mais evoluido - parte 2',
                body: 'A equipe por trás do React Native tem trabalhado arduamente para fornecer atualizações e melhorias constantes na plataforma, graças à sua comunidade ativa de desenvolvedores. Entre as tendências e melhorias observadas estão: novas bibliotecas e componentes, ferramentas de depuração aprimoradas. O React Native está moldando o futuro do desenvolvimento de aplicativos móveis, revolucionando-o com uma abordagem única para a criação de interfaces de usuário nativas. Sua arquitetura flexível e o uso de JavaScript como linguagem de programação facilitam aos desenvolvedores a criação de aplicativos para iOS e Android simultaneamente. Além disso, o React Native também oferece...'
,
                image: 'https://reactnative.dev/img/logo-og.png',
              },
            ]}
            renderItem={({ item, index }) => <Post item={item} />}
            keyExtractor={(item, index) => String(index)}
          />
        </ScrollView>
      </ScrollView>
      <Float />
    </>
  );
}
