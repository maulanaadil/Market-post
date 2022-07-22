import React, { useState } from 'react';
import MainLayout from '@modules/layouts/main-layout';
import { SidebarCreatePost } from '../../modules';

export default function HomePage() {
  const [showSidebarPost, setShowSidebarPost] = useState(false);
  return (
    <>
      <SidebarCreatePost show={showSidebarPost} setShow={setShowSidebarPost} />
      <MainLayout>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        dolorem, minus minima officia exercitationem voluptates a fugiat ut quos
        necessitatibus omnis facilis vel corporis dolorum dignissimos voluptatem
        optio! Voluptates? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ipsa possimus sequi officiis sed quaerat porro soluta adipisci,
        similique enim impedit quod, vero temporibus neque perferendis.
        Similique consectetur aspernatur fugit asperiores? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Hic expedita dolorem, minus minima
        officia exercitationem voluptates a fugiat ut quos necessitatibus omnis
        facilis vel corporis dolorum dignissimos voluptatem optio! Voluptates?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa possimus
        sequi officiis sed quaerat porro soluta adipisci, similique enim impedit
        quod, vero temporibus neque perferendis. Similique consectetur
        aspernatur fugit asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Hic expedita dolorem, minus minima officia
        exercitationem voluptates a fugiat ut quos necessitatibus omnis facilis
        vel corporis dolorum dignissimos voluptatem optio! Voluptates? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Ipsa possimus sequi
        officiis sed quaerat porro soluta adipisci, similique enim impedit quod,
        vero temporibus neque perferendis. Similique consectetur aspernatur
        fugit asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Hic expedita dolorem, minus minima officia exercitationem
        voluptates a fugiat ut quos necessitatibus omnis facilis vel corporis
        dolorum dignissimos voluptatem optio! Voluptates? Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Ipsa possimus sequi officiis sed
        quaerat porro soluta adipisci, similique enim impedit quod, vero
        temporibus neque perferendis. Similique consectetur aspernatur fugit
        asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        expedita dolorem, minus minima officia exercitationem voluptates a
        fugiat ut quos necessitatibus omnis facilis vel corporis dolorum
        dignissimos voluptatem optio! Voluptates? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Ipsa possimus sequi officiis sed quaerat
        porro soluta adipisci, similique enim impedit quod, vero temporibus
        neque perferendis. Similique consectetur aspernatur fugit asperiores?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic expedita
        dolorem, minus minima officia exercitationem voluptates a fugiat ut quos
        necessitatibus omnis facilis vel corporis dolorum dignissimos voluptatem
        optio! Voluptates? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ipsa possimus sequi officiis sed quaerat porro soluta adipisci,
        similique enim impedit quod, vero temporibus neque perferendis.
        Similique consectetur aspernatur fugit asperiores?
      </MainLayout>
    </>
  );
}
