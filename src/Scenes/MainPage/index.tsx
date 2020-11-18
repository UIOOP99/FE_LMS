import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import MessageCard, {IMessageCardProps} from "./components/MessageCard";
import UserCard, {IUserCardProps} from "./components/UserCard";

const messageCardMocks: IMessageCardProps[] = [
  {
    userFullName: "امیررضا اسماعیلی",
    classRoomName: "مهندسی نت 2",
    message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    attachedFiles: [
      { fileName: 'file_1.pdf', fileUrl: 'url'},
      { fileName: 'file_2.pdf', fileUrl: 'url'},
      { fileName: 'file_3.pdf', fileUrl: 'url'},
    ],
    userAnswers: [
      { userFullName: 'امیررضا اسماعیلی', answer: 'جواب سوال اول'},
    ],
    messageDate: new Date(),
  }
];

const userCardMocks: IUserCardProps[] = [
  {
    userFullName: "امیررضا اسماعیلی",
    identificationNumber: "963613009",
  }
];

const index = () => {
  return (
    <div>
      <Navbar />
      <MessageCard 
        userFullName={messageCardMocks[0].userFullName}
        classRoomName={messageCardMocks[0].classRoomName}
        message={messageCardMocks[0].message} 
        attachedFiles={messageCardMocks[0].attachedFiles} 
        messageDate={messageCardMocks[0].messageDate}
        userAnswers={messageCardMocks[0].userAnswers}
      />
      <Grid container>
        <Grid item xs={3}>
          <UserCard 
            userFullName={userCardMocks[0].userFullName}
            identificationNumber={userCardMocks[0].identificationNumber}
            showIdNumber
          />
          <UserCard 
            userFullName={userCardMocks[0].userFullName}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
