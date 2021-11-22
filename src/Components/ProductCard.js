import {Image, Button, Box, Flex, Text} from '@chakra-ui/react';

const ProductCard = ({product, addToCartHandler}) => {

    const trimmedDescription = description => {
        const match =  description.match(/>+.*<+/);

        if (match) return match[0].substr(1, match[0].length - 2);
        return description;
    }

    return (
        <Box className="product-card" borderWidth="1px" padding="2rem" borderRadius="lg">
            <Flex direction="column" h="100%" justifyContent="space-between">
                <Image objectFit="contain" mb="3" src={product.image.url} flex="1"/>
                <Flex direction="column">
                    <Text>{product.name}</Text>
                    <Text>{trimmedDescription(product.description)}</Text>
                    <Text>{product.price.formatted_with_symbol}</Text>
                    <Button
                        mt="3"
                        justifySelf="flex-end"
                        onClick={() => addToCartHandler(product)}
                    >
                        Add to cart
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProductCard;