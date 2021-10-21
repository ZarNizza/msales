
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

export function HomeScreen ( {navprops, navigation} ) {
    const {selected, setSelected} = navprops.params;
     return (
      <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <Center flex={1} space={3}>
          <Circle size="52vw" bg="purple.600" alignItems="center">
            <Circle size="50vw" bg="purple.800" alignItems="center">
              <Text color="white" fontSize="30">beHappy!</Text>
              <Text color="white" fontSize="20">
                <Icon as={<MaterialIcons name="check" />} color="white" />
                studio
              </Text>
            </Circle>
          </Circle>
        </Center>
{/* ------------------------------------------kvadratiki------------------------------------------------------- */}
        <Center flex={1} space={3}>
          <VStack space={3}>
            <HStack space={3}>
              <Pressable onPress={() => {setSelected(1); navigation.navigate('Plus', {selected:selected, setSelected:setSelected})} }>
                <Square size="40vw" bg="green.400" p="10px">
                  <Text color="white" fontSize="72" mb="10px">
                    +
                  </Text>
                </Square>
              </Pressable>
              <Pressable onPress={() => setSelected(3)}>
                <Square size="40vw" bg="orange.400" p="10px">
                  <Text color="white" fontSize="72" mb="15px">
                    -
                  </Text>
                </Square>
              </Pressable>
            </HStack>
            <HStack space={3}>
              <Pressable onPress={() => setSelected(2)}>
                <Square size="40vw" bg="yellow.400" p="10px">
                  <Text color="white">Статистика</Text>
                </Square>
              </Pressable>
              <Pressable onPress={() => setSelected(4)}>
                <Square size="40vw" bg="blue.400" p="10px">
                  <Text color="white">Настройки</Text>
                </Square>
              </Pressable>
            </HStack>
          </VStack>
        </Center>
{/* -----------------------------------------------footer-------------------------------------------------- */}
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {setSelected(0); navigation.navigate('Home', {selected:selected, setSelected:setSelected})}}
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
                Доходы
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {setSelected(1); navigation.navigate('Plus', {selected:selected, setSelected:setSelected})}}
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
                Расходы
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "star" : "star-outline"}
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
      </Box>
    </NativeBaseProvider>
      );
    };
