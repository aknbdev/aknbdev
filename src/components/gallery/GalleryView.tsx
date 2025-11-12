"use client";

import { Media, MasonryGrid, Flex, LetterFx } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { useState } from 'react';
import styles from "./Gallery.module.scss";

export default function GalleryView() {
  return (
    <MasonryGrid
      columns={3}
      s={{ columns: 1 }}
      m={{ columns: 2 }}
      l={{ columns: 3 }}
      gap="16">
      {gallery.images.map((image, index) => {
				const [triggerLocation, setTriggerLocation] = useState<() => void>(() => () => {});
        const [triggerTechnical, setTriggerTechnical] = useState<() => void>(() => () => {});

        return (
          <Flex
            className={styles.trigger}
            position="relative"
            key={index}
            onMouseOver={() => {
              triggerLocation();
              triggerTechnical();
            }}
          >
            <Media
              enlarge
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
              radius="m"
              aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "2 / 3"}
              src={image.src}
              alt={image.alt}
            />
            <Flex
              className={styles.details}
              position="absolute"
              fillWidth
              fillHeight
              zIndex={1}
              direction="column"
              vertical="end"
              horizontal="center"
              gap="8"
              textVariant="label-default-s"
              paddingBottom="32"
              paddingX="24"
            >
              <LetterFx
                trigger="custom"
                onTrigger={(handler) => setTriggerLocation(() => handler)}
                speed="medium"
              >
                {image.location}
              </LetterFx>
              <LetterFx
                trigger="custom"
                onTrigger={(handler) => setTriggerTechnical(() => handler)}
                speed="medium"
              >
                {image.technical}
              </LetterFx>
            </Flex>
          </Flex>
        );
			})}
    </MasonryGrid>
  );
}
