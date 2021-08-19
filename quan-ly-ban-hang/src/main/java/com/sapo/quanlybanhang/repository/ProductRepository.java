package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.websocket.server.PathParam;

import java.sql.Date;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
    @Query(value = "select * from products as p where p.state is null and (p.code LIKE %?1% or p.name like %?1%)", nativeQuery = true)
    List<ProductEntity> searchByNameAndCode(String keyword, Pageable pageable);
//    @Query(value = "SELECT * FROM products as p where p.category_id = ?1; ", nativeQuery = true)
//    List<ProductEntity> findAllByCategory(String keyword);
 @Query(value = "select * from products as p where p.state is null and (p.code LIKE %?1% or p.name like %?1%)", nativeQuery = true)
 List<ProductEntity> searchByKey(String keyword);
    @Query(value = "select * from products as p where p.state is null order by p.id desc ", nativeQuery = true)
    List<ProductEntity> getAll();

 @Query(value = "select * from products as p order by p.id desc limit 1", nativeQuery = true)
 List<ProductEntity> getAll1();
 @Query(value = "select * from products as p where p.state is null order by p.id desc limit 1", nativeQuery = true)
 ProductEntity getAll2();

 @Query(value = "select p.code,p.name,c.name,SUM(o.quanlity) from products as p join oder_detail  as o on p.id = o.product_id join categories as c on c.id = p.category_id where p.state is null group by p.name", nativeQuery = true)
 ProductEntity getAll3();


 ProductEntity findFirstByOrderByIdDesc();
   Boolean existsByCode(String code);
    @Query(value = "select * from products as p where p.state is null order by p.id desc ", nativeQuery = true)
    List<ProductEntity> getAllPagination(Pageable pageable);

    @Query(value = "select * from products as p where p.state is null and p.category_id=?1 ", nativeQuery = true)
    List<ProductEntity> filterAll(int id, Pageable pageable);

    List<ProductEntity> findAllByStateIsNotNull();

    List<ProductEntity> findAllByStateIsNull();

    List<ProductEntity> findByCategory_IdAndStateIsNull(int id);

    ProductEntity findByIdAndStateIsNull(int id);

    ProductEntity findByIdAndStateIsNotNull(int id);

    List<ProductEntity> findAllByIdIsNotNullOrderByPriceDesc();

    @Query(value = "SELECT * FROM products as p where created_date>= now() - INTERVAL 7 day ", nativeQuery = true)
    List<ProductEntity> getALLByDay();
    
    @Query(value = "SELECT * FROM products as p where created_date>= now() - INTERVAL 30 day; ", nativeQuery = true)
    List<ProductEntity> getALLByMonth();



     @Query(value = "select  p.code,p.image, p.name,c.name as danh,sum(od.quanlity) quanlity\n" +
             "         from orders o\n" +
             "         left join order_detail od on o.id = od.order_id\n" +
             "         join products p on p.id = od.product_id join categories c on c.id =p.category_id\n" +
             "         where date(o.created_date) between :start and :to \n" +
             "         group by p.id order by quanlity desc", nativeQuery = true)
     List<Object[]> statistical(@Param("start") Date start, @Param("to") Date to);


 @Query(value = "select  p.code,p.image, p.name,c.name as danh,sum(od.quanlity) quanlity\n" +
         "         from orders o\n" +
         "         left join order_detail od on o.id = od.order_id\n" +
         "         join products p on p.id = od.product_id join categories c on c.id =p.category_id\n" +
         "         where date(o.created_date) between :start and :to\n" +
         "         group by p.id order by quanlity desc", nativeQuery = true)
 List<Object[]> statisticalPagination(@Param("start") Date start, @Param("to") Date to, Pageable pageable);




    @Query(value = "SELECT * FROM products as p order by p.price desc ", nativeQuery = true)
    List<ProductEntity> sortByPrice();

    @Query(value = "SELECT * FROM products as p order by p.name desc ", nativeQuery = true)
    List<ProductEntity> sortByName();

    @Query(value = "SELECT * FROM products as p order by p.number_product desc ", nativeQuery = true)
    List<ProductEntity> sortByNumber();

    @Query(value = "select * from products as p where p.state is null and p.name LIKE %?1% ", nativeQuery = true)
    List<ProductEntity> searchAllName(String keyword);




    @Query(value = "select * from products as p where p.state is null and  p.category_id =?1", nativeQuery = true)
    List<ProductEntity> searchByCategory(String keyword);

    @Query(value = "select * from products as p where p.state is null and  p.category_id =?1", nativeQuery = true)
    List<ProductEntity> searchByCategoryPagination(String keyword,Pageable pageable);

    @Query(value = "select * from products as p left join categories as c on p.category_id = c.id where c.id= :filter and(p.name like %:keyword% or p.code like %:keyword%) and state is null ", nativeQuery = true)
    List<ProductEntity> searchByNameAndCodeByCategory(@Param("filter") String filter, @Param("keyword") String keyword);

    @Query(value = "select * from products as p left join categories as c on p.category_id = c.id where c.id= :filter and(p.name like %:keyword% or p.code like %:keyword%) and state is null ", nativeQuery = true)
    List<ProductEntity> searchByNameAndCodeByCategoryPagination(@Param("filter") String filter, @Param("keyword") String keyword, Pageable pageable);



}
