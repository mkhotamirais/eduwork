import { H2 } from "../../components/Tags";

const Nosql = () => {
  return (
    <div>
      <H2>5. Apa pertimbangan menggunakan no sql</H2>
      <ul className="list-inside list-disc">
        <li>
          NoSql (not only sql) yakni database selain sql, tentu sangat banyak jenisnya / tipenya: key-value store ex redis;
          document base ex mongodb; coulumn-oriented db ex Cassandra; graph db ex neo4j
        </li>
        <li>
          NoSql: scheemaless/flexible schema yakni blueprint database yang menentukan bagaimana data akan disimpan;
          denormalizatin; non-relational database (tidak menganut primary key, foreign key dll); unstructured,
          semi-structured, structured data.
        </li>
        <li>
          konsep denormalization (embedded document), misal data pertama ada 2 fileld (nama, umur) data kedua ada 3 field
          (nama, umur, asal).{" "}
        </li>
        <li>terminologi: sql/nosql; db/db; table/collection;row or record/document; column or field/field</li>
        <li>
          MongoDb adalah db berbasis document yang memiliki skalabilitas dan fleksibilitas yang kita inginkan dan vitur query
          dan indexing yang kita butuhkan
        </li>
        <li>
          alasan menggunakan mongodb: format datanya JSON (BSON) binary json; kareja json itu javascript; sebagai teknologi
          pendukung MERN, MEVN, MEAN
        </li>
      </ul>
    </div>
  );
};

export default Nosql;
