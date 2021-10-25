
import React from "react";
import {
  Text,
  VStack,
  HStack,
  Center,
  Square,
  Pressable,
} from "native-base";
import { useNavigation } from '@react-navigation/native';

export const Kvadratiki = () => {
    const navigation = useNavigation();
    return (
        <Center flex={1} space={3}>
          <VStack space={3}>
            <HStack space={3}>
              <Pressable onPress={() =>  navigation.navigate('Plus') }>
                <Square size="40vw" bg="green.400" p="10px">
                  <Text color="white" fontSize="72" mb="10px"> + </Text>
                </Square>
              </Pressable>
              <Pressable onPress={() =>  navigation.navigate('Minus') }>
                <Square size="40vw" bg="orange.400" p="10px">
                  <Text color="white" fontSize="72" mb="15px"> - </Text>
                </Square>
              </Pressable>
            </HStack>

            <HStack space={3}>
              <Pressable onPress={() =>  navigation.navigate('Stat') }>
                <Square size="40vw" bg="yellow.400" p="10px">
                  <Text color="white">Статистика</Text>
                </Square>
              </Pressable>
              <Pressable onPress={() =>  navigation.navigate('Setup') }>
                <Square size="40vw" bg="blue.400" p="10px">
                  <Text color="white">Настройки</Text>
                </Square>
              </Pressable>
            </HStack>
          </VStack>
        </Center>
      );
    };
