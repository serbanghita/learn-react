import * as React from "react";
import {Button, defaultTheme, Flex, Image, ProgressBar, Provider, Text, View} from "@adobe/react-spectrum";
import {ReactElement, useEffect, useState} from "react";
import {DimensionValue} from "@react-types/shared/src/dna";
import {Responsive} from "@react-types/shared/src/style";

export interface MyComponentProps {
  name: string;
  image?: string;
  width?: Responsive<DimensionValue>;
  height?: Responsive<DimensionValue>;
  /**
   * The text to display while the image is loading.
   */
  loadingText?: string;
}

export default function MyComponent({name, image, width = "size-2400", height = "size-2400", loadingText = "Loading..."}: MyComponentProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider theme={defaultTheme} colorScheme={"light"}>
      <div className={"my-component-wrapper"}>
        <Flex direction="column" gap="size-100" width={width} height={height}>
          {isLoading && <View><ProgressBar label={loadingText} isIndeterminate /></View>}
          {!isLoading &&
            <>
              {image && <View borderWidth={"thin"} borderColor={"purple-400"}><Image src={image} alt={name} minHeight={height} /></View> }
              <View borderWidth={"thin"} borderColor={"blue-400"}><Text>{name}</Text></View>
            </>
          }
        </Flex>
      </div>
    </Provider>
  );


}
