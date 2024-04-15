import ImageSlider from '@/components/shared/ImageSlider';
import React from 'react'

const shop = () => {
    const images = [
        { src: 'https://soliloquywp.com/wp-content/uploads/2019/02/nb_pss_2.jpg', alt: 'Mount Fuji' },
        { src: 'https://wallpapers.com/images/featured/tree-0wdwtdt9xzcm91b1.jpg', alt: 'Tree' },
        { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGR8ZW58MHx8MHx8fDA%3D', alt: 'Scenic Landscape' }
      ];
      return (<ImageSlider images={images} />);
}

export default shop