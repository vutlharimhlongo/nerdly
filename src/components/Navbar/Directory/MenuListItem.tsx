import React from "react";
import { Flex, Icon, MenuItem, Image } from "@chakra-ui/react";
import { IconType } from "react-icons";
import useDirectory from "../../../hooks/useDirectory";

type DirectoryItemProps = {
  displayText: string;
  link: string;
  defaultImageURL: string;
  icon: IconType;
  iconColor: string;
  imageURL?: string;
};

const MenuListItem: React.FC<DirectoryItemProps> = ({
  displayText,
  link,
  icon,
  defaultImageURL,
  iconColor,
  imageURL,
}) => {
  const { onSelectMenuItem } = useDirectory();
  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() =>
        onSelectMenuItem({
          displayText,
          link,
          defaultImageURL,
          imageURL,
          icon,
          iconColor,
        })
      }
    >
      <Flex alignItems="center">
        {imageURL ? (
          <Image borderRadius="full" boxSize="18px" src={imageURL} mr={2} />
        ) : (
          <Image
            borderRadius="full"
            boxSize="18px"
            // src="/images/nerdlygreen.svg"
            src={defaultImageURL}
            mr={2}
          />
          // <Icon fontSize={20} mr={2} as={icon} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  );
};
export default MenuListItem;
