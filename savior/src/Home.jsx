



import { Box, Flex, Heading, Button, Link, Text, Img, VStack, HStack, Input, keyframes, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Image, Accordion, IconButton } from '@chakra-ui/react';

function Home() {
    const scaleUp = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.05);
    }
  `;

    return (
        <>
            <Box width={"100%"} height={"auto"} display={"flex"} flexDir={"column"} >
                <Box
                    bgImage="url('https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__')"
                    bgSize="cover"
                    bgPos="center"
                    height={"588px"}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    color="white"
                >
                    <Flex
                        as="nav"
                        justify="space-between"
                        align="center"
                        background={"transparent"}
                        p="1rem 2rem"
                        gap={"30px"}
                    >
                        <Flex align={"center"} justify={"space-between"}>
                            <Img width={["60px", "106px"]} height={["60px", "117px"]} mt={"27px"} src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__" />
                            <Heading as="h1" size="lg" fontSize={["18px", "32px"]} fontFamily={"sans-serif"}>Saviour</Heading>
                        </Flex>
                        <Box as="ul" display={["none", "flex"]} listStyleType="none" textDecorationLine={"none"} background={"black"} padding={2} borderRadius={"10px"} fontFamily={"sans-serif"} textDecoration={"none"}>
                            <Box as="li" mx="1rem">
                                <Link href="#home">Home</Link>
                            </Box>
                            <Box as="li" mx="1rem">
                                <Link href="#ido">IDO</Link>
                            </Box>
                            <Box as="li" mx="1rem">
                                <Link href="#tokenomics">Tokenomics</Link>
                            </Box>
                            <Box as="li" mx="1rem">
                                <Link href="#roadmap">Roadmap</Link>
                            </Box>
                            <Box as="li" mx="1rem">
                                <Link href="#coming-soon">Coming Soon</Link>
                            </Box>
                        </Box>
                        <Button bg="red" color="white">
                            Connect Wallet
                        </Button>
                    </Flex>
                    <Flex justify="center" align="center" flex="1" textAlign="center" >
                        <Text
                            fontSize={["32px", "45px"]}
                            p="1rem"
                            fontWeight={400}
                            borderRadius="md"
                            lineHeight={"53.55px"}
                            fontFamily={"saans-serif"}
                            top={"185px"}
                        >
                            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
                        </Text>
                    </Flex>
                </Box>
                <Flex
                    flexDir={["column", "row"]}
                    alignItems="center"
                    justifyContent="space-around"
                    p="2rem"
                    bg="black"
                    color="white"
                    width={"100%"}
                >
                    <Box
                        display={"flex"} flexDir={"column"}
                        alignItems={["center", "flex-start"]}
                        width={["100%", "50%"]}
                        spacing="1rem"
                        gap={"25px"}
                        // backgroundColor={"white"}
                        textAlign={"center"}
                    >
                        <Heading
                            as="h2"
                            size="lg"
                            color={"#ED0137"}

                            fontSize={["32px", "44px"]}
                            fontWeight={400}
                        >
                            INTRODUCTION
                        </Heading>
                        <Text fontSize={["21px", "24px"]} lineHeight={"28px"}>
                            We've all been in the mud once, and now we've decided to fight it out.
                            Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain.
                            Save the lucky ones alive, join us to save the future!
                            Our mission is to empower everyone to share wealth and succeed.
                        </Text>
                        <Link href="#read-more" color="blue.400">
                            read more...
                        </Link>
                        <Button
                            as="a"
                            href="#documents"
                            bg="red.500"
                            color="white"
                            _hover={{ bg: 'red.600' }}
                        >
                            Documents
                        </Button>
                    </Box>
                    <Box
                        bgImage="url('https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__')"
                        bgSize="cover"
                        bgPos="center"

                        width={["446px", "795px"]}
                        height={["446px", "795px"]}
                        borderRadius="md"
                    />
                </Flex>
                <Box
                    width={"100%"}
                    display="flex"
                    flexDirection="column"
                    gap={"35px"}
                    color="white"
                    backgroundColor={"black"}

                    padding={["0px 10px 0px 10px", "0px 80px 0px 80px"]}
                // border={"1px solid white"}
                >
                    <Heading as="h1" size="lg" textAlign="center" mb={"1rem"} fontSize={["28px", "40px"]} color="red.500">
                        Participate in our IDO Event!
                    </Heading>

                    <Flex
                        flexDir={["column", "row"]}
                        justifyContent="space-between"
                        alignItems="flex-start"
                        bg="rgba(0, 0, 0, 0.8)"
                        borderRadius="md"

                    >

                        <VStack
                            spacing="1rem"
                            p="1rem"
                            borderRadius="md"
                            flex="1"
                            mb={{ base: '2rem', lg: '0' }}
                            alignItems="center"
                            width={["100%", "50%"]}
                        // border={"2px solid red"}

                        >
                            <Text mb="2rem" fontSize={["16px", "20px"]}>
                                During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.
                            </Text>
                            <Box display={"flex"} flexDir={"column"} justifyContent={"space-between"} alignSelf={"center"} textAlign={"center"} border="1px solid"
                                borderColor="red.500" padding={5} borderRadius={5} width={["265px", "412px"]} height={["245px", "382px"]}  >
                                <Button alignSelf={"center"} bg="red.500" color="white" _hover={{ bg: 'red.600' }}>
                                    Token Info
                                </Button>
                                <Text>Total Token Supply: 20X</Text>
                                <Text>Soft Cap: 200 BNB</Text>
                                <Text>Initial Exchange Rate: 1 BNB</Text>
                                <Text>Recommended Referral Commission:</Text>
                                <Text>1st Generation: 5%</Text>
                                <Text>2nd Generation: 2%</Text>
                            </Box>
                            <Button bg="red.500" color="white" _hover={{ bg: 'orange.600' }}>
                                Connect Wallet
                            </Button>
                            <Text textAlign="center" mt="2rem" mb="1rem" color="red.500">
                                Become an affiliate & Earn 7% as Commission!
                            </Text>
                            <Flex justify="center" mb="2rem" width={["330px", "467px"]} padding={4}>
                                <Input placeholder="Generate a unique referral link" mr="1rem" bg="black" color="white" borderRadius={"20px"} borderColor={"red"} />
                                <Button bg="red.500" color="white" _hover={{ bg: 'red.600' }}>
                                    Generate
                                </Button>
                            </Flex>
                        </VStack>

                        <VStack
                            spacing="1rem"
                            p="1rem"
                            border="1px solid"
                            borderColor="red.500"
                            borderRadius="md"
                            flex="2"
                            justify={"space-between"}
                            alignItems="center"
                            width={["auto", "738px"]}
                            height={["auto", "738px"]}
                            flexWrap={"wrap"}

                        >
                            <HStack spacing="1rem">
                                <Box bg="black" p="1rem" borderRadius="md">
                                    00
                                </Box>
                                <Text>:</Text>
                                <Box bg="black" p="1rem" borderRadius="md">
                                    00
                                </Box>
                            </HStack>
                            <Heading as="h2" size="md" color="red.500" fontSize={"48px"}>
                                PRESALE 1
                            </Heading>
                            <Text>1 Saviour = 0.657 USDT</Text>
                            <Text>Next Stage Price = 0.723 USDT</Text>
                            <Text>Sold = $34,56,56,764/50,00,00,00,000</Text>
                            <Text>Raised = $34,56,56,764/$40,00,00,00,000</Text>
                            <Input width={["232px", "467px"]} placeholder="Enter the amount (BNB)" bg="black" color="white" />
                            <Input width={["232px", "467px"]} placeholder="Minimum Quantity to Buy" bg="black" color="white" />
                            <Input width={["232px", "467px"]} placeholder="Maximum Quantity of Tokens" bg="black" color="white" />
                            <HStack spacing="1rem">
                                <Button bg="red.500" color="white" _hover={{ bg: 'red.600' }}>
                                    Buy
                                </Button>
                                <Button bg="red.500" color="white" _hover={{ bg: 'orange.600' }}>
                                    Claim Drop
                                </Button>
                            </HStack>
                        </VStack>
                    </Flex>

                </Box>





                {/* Token */}

                <Box
                    width={"100%"}
                    height={"706px"}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={"black"}

                >
                    <Flex
                        justifyContent="center"
                        alignItems="flex-start"
                        flexDirection={{ base: 'column', md: 'row' }}
                        bg="rgba(0, 0, 0, 0.7)"
                        p="2rem"
                        borderRadius="md"
                        boxShadow="lg"
                        width={"90%"}
                    >
                        {/* Token Details Box */}
                        <Box
                            bg="rgba(255, 255, 255, 0.1)"
                            p="2rem"
                            borderRadius="md"
                            border="1px solid"
                            borderColor="red.500"
                            m="1rem"

                            width={["auto", "412px"]}
                            height={"306px"}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-between"}
                            textAlign={"center"}
                        >
                            <Heading as="h3" size="lg" color="white" mb="1rem" textAlign={"center"} backgroundColor={"red"} borderRadius={"15px"}>
                                Token Details
                            </Heading>
                            <Text color="white">
                                <strong>Name:</strong> Saviour
                            </Text>
                            <Text color="white">
                                <strong>Symbol:</strong> SVR
                            </Text>
                            <Text color="white">
                                <strong>Total Supply:</strong> 1000 Trillion
                            </Text>
                            <Text color="white">
                                <strong>Decimals:</strong> 18
                            </Text>
                        </Box>

                        {/* Chart Box */}
                        <Box
                            display={["none", "flex"]}
                            m="1rem"
                            flex="2"
                            width={"336px"}
                            position={"relative"}
                        >
                            <img
                                src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
                                alt="Token Distribution Chart"
                                width={"278px"}
                                height={"278px"}
                                style={{ position: "absolute", top: "30px", left: "306px" }}
                            />
                            <Text
                                position="absolute"
                                top="-3px"
                                left="583px"
                                color="white"

                            >
                                IDO Round (20%)
                            </Text>
                            <Text
                                position="absolute"
                                top={"14px"}
                                left={"100px"}
                                color="white"

                            >
                                Community Airdrop (7.5%)
                            </Text>
                            <Text
                                position="absolute"
                                top="100px"
                                left="600px"
                                color="white"

                            >
                                Team Founders (2.5%)
                            </Text>
                            <Text
                                position="absolute"
                                top="297px"
                                left="571px"
                                color="white"

                            >
                                Black Hole Contract Address (50%)
                            </Text>
                            <Text
                                position="absolute"
                                top="284px"
                                left="34px"
                                color="white"
                            >
                                Initial Liquidity Provider (15%)
                            </Text>
                            <Text
                                position="absolute"
                                top="152px"
                                left="100px"
                                color="white"
                            >
                                Ecological Fund (5%)
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                {/* road map */}

                <Box background={"black"} height={"716px"} display={"flex"} flexDir={"column"} justifyContent={"center"} gap={"30px"} alignItems={"center"}>
                    <Heading as="h2" size="lg" textAlign="center" color="red.500" fontSize={"44px"}>
                        Road Map
                    </Heading>
                    <Flex
                        justifyContent="space-between"
                        flexWrap="wrap"
                        alignItems="flex-start"
                    >
                        <Box
                            backgroundImage={"url(https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__)"}
                            backgroundSize={"cover"}
                            borderRadius="md"
                            bgPos="center"
                            p="1rem"
                            m="1rem"
                            flex="1"
                            width={["131px", "237px"]}
                            height={"349px"}
                            border="1px solid"
                            borderColor="red.500"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            _hover={{
                                animation: `${scaleUp} 0.3s forwards`,
                            }}
                        >

                            <Box mt={"auto"}>
                                <Heading as="h3" size="md" color="white" mb="0.5rem">
                                    Phase 1
                                </Heading>
                                <Text color={"white"}>Technical Readiness and Smart Contract Audit</Text>
                            </Box>
                        </Box>
                        <Box
                            backgroundImage={"url(https://s3-alpha-sig.figma.com/img/aa29/8bb9/151666f4ac7fae86b6b63f7e97472d61?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZAHaJXiBYfL1h1zgGPIaFE0JavKk6hTn3UOSRgYpS-DqHfNvBX1Zohv99pdXvGSRn2E8qKQy3rUrez0ySAOTwPCu3XeZgk4fsGL8xc-81KN5vvTzjWexDRx4NXnfW6PnIzY8nlwaizp7wImuel-p6v~HAj5yNO4QQQyTkK7Qc8qPTfZ-EK74gDlaMRluU1sJfDwiGihGOhxnVIlyEa~FuAzvJpUmuoERPLFnrrHoRktYitrDFOmbzL41UpIIhJ0qoi6HVz8OPWYXNEAHxe46UXL6RMwmFnwsezpMONedZIB5IboMY7i~3eXxbueFbLgi4yD0~NssIKD~vhbXqHoiw__)"}
                            backgroundSize={"cover"}
                            borderRadius="md"
                            bgPos="center"
                            p="1rem"
                            m="1rem"
                            flex="1"
                            width={["131px", "237px"]}
                            height={"349px"}
                            border="1px solid"
                            borderColor="red.500"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            _hover={{
                                animation: `${scaleUp} 0.3s forwards`,
                            }}
                        >

                            <Box mt={"auto"}>
                                <Heading as="h3" size="md" color="white" mb="0.5rem">
                                    Phase 2
                                </Heading>
                                <Text color={"white"}>Increase Liquidity and Trading Volume</Text>
                            </Box>
                        </Box>
                        <Box
                            backgroundImage={"url(https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__)"}
                            backgroundSize={"cover"}
                            borderRadius="md"
                            bgPos="center"
                            p="1rem"
                            m="1rem"
                            flex="1"
                            width={["131px", "237px"]}
                            height={"349px"}
                            border="1px solid"
                            borderColor="red.500"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            _hover={{
                                animation: `${scaleUp} 0.3s forwards`,
                            }}
                        >

                            <Box mt={"auto"}>
                                <Heading as="h3" size="md" color="white" mb="0.5rem">
                                    Phase 3
                                </Heading>
                                <Text color={"white"}>Community Building and Marketing</Text>
                            </Box>
                        </Box>
                        <Box
                            backgroundImage={"url(https://s3-alpha-sig.figma.com/img/e792/f455/d02fe23b0b95b2461d5ab0db33cfb4b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoHmU4eSMr3BrRCqhZU4684944N4vHk3CFWj4zcV~r2Lwras3ip4Q55mWg8jvJaRoiZfA-lXzDxE6zK0s66seFnh4cFV5bkUCf7oxRmwWosNn4InT3~WxIRVJXTruqzwLeK2Kg467xnwbp9B4tOtff46QCteK6wfLR-A2TpQDBKd2dSfGQEwKRBLeZlKdUMt40PuBXlzS4LJm6yE98HrysbllIqXZlFe7dIXoeHkSkDzrWuiTTvKFYS6qqLSBU5P6RgxzCVewvHf69K24gsKLBHBJMJmHqzS0qOYT8j7teh6KaxoLnLef58tI99B9UdGeJQ4l2sygHUmvubcWJMqJw__)"}
                            backgroundSize={"cover"}
                            borderRadius="md"
                            bgPos="center"
                            p="1rem"
                            m="1rem"
                            flex="1"
                            width={["131px", "237px"]}
                            height={"349px"}
                            border="1px solid"
                            borderColor="red.500"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            _hover={{
                                animation: `${scaleUp} 0.3s forwards`,
                            }}
                        >

                            <Box mt={"auto"}>
                                <Heading as="h3" size="md" color="white" mb="0.5rem">
                                    Phase 4
                                </Heading>
                                <Text color={"white"}>Ecosystem Expansion and Partnerships</Text>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                {/* faq */}

                <Box

                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p="2rem"
                    backgroundColor={"black"}
                >

                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        flexDirection={["column", "row"]}

                        borderRadius="md"
                        width="90%"

                    >
                        {/* Image Box */}
                        <Box


                            borderRadius="md"


                            flex="1"
                            width={["300px", "503px"]}
                            height={["300px", "503px"]}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"


                        >
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
                                alt="FAQ Image"
                                width={"100%"}
                                height={"100%"}
                            />
                        </Box>

                        {/* Accordion Box */}
                        <Box

                            p="2rem"
                            borderRadius="md"

                            m="1rem"
                            flex="2"
                            gap={"20px"}
                            maxW={{ base: 'auto', md: '600px' }}
                        >
                            <Heading as="h2" size="xl" color="red.500" mb="2rem" textAlign="center">
                                FAQ
                            </Heading>
                            <Accordion allowToggle display={"flex"} flexDir={"column"} justifyContent={"space-between"} gap={"30px"}>
                                <AccordionItem border={"2px solid red"} borderRadius={"20px"}>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" color="white" >
                                            1. Why choose "Savior"?
                                        </Box>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} color="white">
                                        Savior is designed to empower everyone to share wealth and succeed.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem border={"2px solid red"} borderRadius={"20px"}>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" color="white">
                                            2. Why is the IDO duration so long?
                                        </Box>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} color={"white"} >
                                        The extended duration ensures everyone has a fair chance to participate.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem border={"2px solid red"} borderRadius={"20px"}>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" color="white">
                                            3. When will trading go live?
                                        </Box>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} color="white">
                                        Trading will go live after the IDO concludes.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem border={"2px solid red"} borderRadius={"20px"}>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left" color="white">
                                            4. When can we claim the tokens?
                                        </Box>
                                        <AccordionIcon color="white" />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} color="white">
                                        After the IDO concludes, you can claim the tokens on our official website.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Flex>
                </Box>

                {/* footer */}


                <Box
                    as="footer"
                    backgroundColor="#000"
                    py="2rem"
                    borderTop="1px solid #000"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"

                >
                    {/* Image and Sitemap Heading */}
                    <Flex flexDirection="column" alignItems="center" mb="1rem" width={"200px"} height={"250px"} >

                        <Box>
                            <Image
                                src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
                                alt="Logo"

                            />
                        </Box>
                        <Box >

                        </Box>
                    </Flex>

                    {/* Sitemap Links */}
                    <Flex
                        flexDir={"row"}
                        flexWrap={"wrap"}
                    >
                        <Link href="#home" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Home
                        </Link>
                        <Link href="#ido" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            IDO
                        </Link>
                        <Link href="#tokenomics" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Tokenomics
                        </Link>
                        <Link href="#roadmap" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Road Map
                        </Link>
                        <Link href="#whitepaper" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Whitepaper
                        </Link>
                        <Link href="#pledge" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Pledge
                        </Link>
                        <Link href="#nft" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            NFT
                        </Link>
                        <Link href="#games" color="white" mx="1rem" my={{ base: '0.5rem', md: '0' }}>
                            Games
                        </Link>
                    </Flex>

                    {/* Social Media Icons */}
                    <Flex>
                        <IconButton
                            as="a"
                            href="https://twitter.com"
                            aria-label="Twitter"

                            variant="ghost"
                            color="white"
                            mx="0.5rem"
                        />
                        <IconButton
                            as="a"
                            href="https://telegram.org"
                            aria-label="Telegram"

                            variant="ghost"
                            color="white"
                            mx="0.5rem"
                        />
                        <IconButton
                            as="a"
                            href="mailto:info@example.com"
                            aria-label="Email"

                            variant="ghost"
                            color="white"
                            mx="0.5rem"
                        />
                    </Flex>
                </Box>
            </Box >
        </>
    )
}

export default Home
