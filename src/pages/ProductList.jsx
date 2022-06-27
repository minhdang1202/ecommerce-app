import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Lọc sản phẩm:</FilterText>
          <Select>
            <Option disabled selected>
              Categories
            </Option>
            <Option>Kem dưỡng</Option>
            <Option>Sữa rửa mặt</Option>
            <Option>Sữa tắm</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp:</FilterText>
          <Select>
            <Option selected>Giá</Option>
            <Option>Giá (Tăng)</Option>
            <Option>Giá (Giảm)</Option>
          </Select>
          <Select>
            <Option selected>Sản xuất</Option>
            <Option>Sản xuất (Cũ)</Option>
            <Option>Sản xuất (Mới)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
