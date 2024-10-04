import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <h1><center>Store</center></h1>
      <br></br>
      <p><b>🎉 We Are On Sale! 🎉</b></p>
      <p>Dive into the world of technology with our exclusive range of products designed to enhance your digital lifestyle. At Just-Tech-IT, we offer a curated selection of the latest gadgets and accessories, from high-performance headphones to sleek phone cases and cutting-edge smart devices.
         Whether you’re a tech enthusiast or just looking for the perfect accessory to elevate your setup, we have something for everyone. Enjoy unbeatable prices, quality assurance, and exceptional customer service. Don’t miss out on our amazing deals—shop now and upgrade your tech game today!</p>
      <br></br>

      <Row md={1} xs={1} lg={5} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
