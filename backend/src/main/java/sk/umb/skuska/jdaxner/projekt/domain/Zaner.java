package sk.umb.skuska.jdaxner.projekt.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "zaner")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Zaner {

    @Id
    @GeneratedValue
    private Long id;

    private String nazov;
}
