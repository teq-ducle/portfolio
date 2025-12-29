/* eslint-disable import/no-anonymous-default-export */
const dataProjects = [
  {
    id: 1,
    image: "/personal.png",
    title: "Bảo hiểm trường học",
    description:
      "Dự án bảo hiểm dành cho học sinh, dùng để đăng ký và quản lý hợp đồng bảo hiểm và đối tượng của sản phẩm trải dài từ cấp từ mẫu giáo đến đại học.",
    url: "/projects/insurance-school",
    category: "Insurance Tech",
    tech: ["NuxtJS", "SCSS"],
  },
  {
    id: 2,
    image: "/personal.png",
    title: "Bảo hiểm thiết bị",
    description:
      "Dự án bảo hiểm dành cho thiết bị điện tử(điện thoại, tablet, camera,...), dùng để đăng ký và quản lý hợp đồng bảo hiểm và yêu cầu thanh toán bảo hiểm khi gặp sự cố",
    url: "/projects/insurance-influenza",
    category: "Insurance Tech",
    tech: ["NuxtJS", "SCSS"],
  },
  {
    id: 3,
    image: "/personal.png",
    title: "Bảo hiểm thiết bị",
    description:
      "Dự án bảo hiểm dành cho thiết bị điện tử(điện thoại, tablet, camera,...), dùng để đăng ký và quản lý hợp đồng bảo hiểm và yêu cầu thanh toán bảo hiểm khi gặp sự cố",
    url: "/projects/insurance-school3",
    category: "Not Insurance Tech",
    tech: ["xyz", "abc"],
  },
];

const dataExperience = [
  {
    id: 1,
    image: "/companies/teq.jpeg",
    position: "BrSE",
    company: "Teqnological Asia",
    startDate: "2024-05-01",
    endDate: null,
    place: "Thành phố Hồ Chí Minh, Việt Nam",
    description:
      "Với vai trò là BrSE, trách nhiệm chính của mình là truyền đạt thông tin dự án một cách rõ ràng với đối tác Nhật Bản để phần mềm được phát triển theo đúng yêu cầu của khách hàng.\n Đồng thời, mình cũng phải là người tạo ra các tài liệu chi tiết để nhóm phát triển có thể triển khai chính xác; quản lý tình trạng dự án để cả hai nhóm có thể thấy rõ tiến độ của nhau.",
  },
  {
    id: 2,
    image: "/companies/techtus.jpeg",
    position: "BrSE",
    company: "IT comtor / BrSE",
    startDate: "2022-10-01",
    endDate: "2024-04-01",
    place: "Thành phố Đà Nẵng, Việt Nam",
    description:
      "Với vai trò là IT comtor, trách nhiệm chính của mình là dịch các cuộc trao đổi giữa bên team Việt Nam và khách hàng Nhật Bản. Thêm nữa, mình cũng phải chuẩn bị tài liệu đặc tả chi tiết để team dev có thể phát triển.\n Qua thời gian, mình được tham gia 2 dự án với tư cách BrSE, đảm nhiệm chính trong việc quản lý và báo cáo tiến độ dự án trực tiếp cho khách hàng Nhật và cấp trên ở Việt Nam",
  },
];

const dataSkill = [
  { id: 1, name: "Miro" },
  { id: 2, name: "Google Workspace" },
  { id: 3, name: "Figma" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
  { id: 6, name: "Postman" },
  { id: 7, name: "Backlog" },
  { id: 8, name: "Japanese" },
  { id: 9, name: "English" },
];

// const SUPPORTED_LOCALES = ['vi', 'ja'];

export { dataProjects, dataExperience, dataSkill };
