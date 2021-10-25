
import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Circle,
  Square,
  Pressable,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export const Footerka = () => {
const navigation = useNavigation();
let selected = 4;
    return (
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => navigation.navigate('Home')}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Старт
              </Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => navigation.navigate('Plus')}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialIcons
                    name={selected === 1 ? "add-circle" : "add-circle-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Плюс
              </Text>
            </Center>
          </Pressable>
          
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => navigation.navigate('Alarm')}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <Ionicons
                    name={selected === 2 ? "alarm" : "alarm-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize={12}>
                Напомнить
              </Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => navigation.navigate('Stat')}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "star" : "star-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize={12}>
                Статистика
              </Text>
            </Center>
          </Pressable>
        </HStack>
      );
    };
