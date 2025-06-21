import GridServiceSection from "@/Components/GridService"
import PageHeader from "@/Components/PageHeader"

const Services = () => {
  return (
    <div>
      <PageHeader  title="Services we offer"
        description="Bespoke web development and Digital Marketing of any type, from search, video and display to email, content, social and mobile."
        breadcrumb={["Home", "Services"]}
        image="https://www.naxtech.com/images/square-shape.png" />
      <GridServiceSection />
    </div>
  )
}

export default Services