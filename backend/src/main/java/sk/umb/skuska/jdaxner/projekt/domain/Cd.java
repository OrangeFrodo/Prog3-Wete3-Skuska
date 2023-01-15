package sk.umb.skuska.jdaxner.projekt.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cd")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cd {
    @Id
    @GeneratedValue
    private Long id;

    private String autor;
    private String nazov;

    @OneToOne
    private Zaner zaner;
}
