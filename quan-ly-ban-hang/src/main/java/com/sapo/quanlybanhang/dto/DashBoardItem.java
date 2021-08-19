package com.sapo.quanlybanhang.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashBoardItem   {
   @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd")
   private Date createdDate;
   private Long price;

}
