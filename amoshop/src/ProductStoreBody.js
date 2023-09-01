// Coffee: price_1Mtu0sBqowYqMVVib0OEVSh7
// Sunglasses: price_1MtuCsBqowYqMVViW7Me3v2k
// Camera: price_1MtuDtBqowYqMVVi9q908t12

const productsArrayBody = [
  {
    id: 1,
    title: "Yougoslick Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 4.99,
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 2,
    title: "Sunglasses Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 9.99,
    img: "https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 3,
    title: "Blocker Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 49.99,
    img: "https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 4,
    title: "Tripping Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 71.9,
    img: "https://plus.unsplash.com/premium_photo-1676455981612-8bbe31921255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 5,
    title: "Prama Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 149.99,
    img: "https://images.unsplash.com/photo-1683710920701-d6d1933800e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 6,
    title: "Brimski Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 40.99,
    img: "https://images.unsplash.com/photo-1683127894789-0348aa4f3e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=419&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 7,
    title: "Vinto Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 39.99,
    img: "https://images.unsplash.com/photo-1683805712653-9a230e480f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 8,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "https://images.unsplash.com/photo-1683760566647-c7a51d021aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 9,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    price: 569.99,
    img: "https://images.unsplash.com/photo-1600869515873-0cec54f54805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
  {
    id: 10,
    title: "Zexe Bag",
    subTitle: "Lorem ipsym oplwe uwer seh seueo os",
    status: "new",
    price: 569.99,
    img: "https://images.unsplash.com/photo-1683541629272-64013170c4ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
    rating: 4.5,
    colors: ["#551a8b", "#b5a642", "#FF0000", "#32cd32", "#100c08", "#faf0e6"],
    desp: "Matagal na nating alam na nakukuha ang atensyon ng nagbabasa ang nababasa na nilalaman ng pahina kapag tinitignan ang pagkakaayos. Ang punto ng paggamit ng Lorem Ipsum ay ito ay may humigit-kumulang na normal na distribusyion ng mga lettra, kesa sa paggamit ng 'Dito ang nilalaman, dito ang nilalaman', pinamumuka nitong nababasa. Maraming desktop publishing packages at web page editors ang gumagamit na ngayong ng Lorem Ipsum bilang regular na modelo ng nilalaman",
  },
];

function getProductDataBody(id) {
  id = parseInt(id);
  let productDataBody = productsArrayBody.find((product) => product.id === id);

  if (productDataBody === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productDataBody;
}

export { productsArrayBody, getProductDataBody };
