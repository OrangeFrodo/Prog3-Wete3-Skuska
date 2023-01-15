package sk.umb.skuska.jdaxner.projekt.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ZanerRepository extends JpaRepository<Zaner, Long> {

    Zaner findByNazov(String nazov);
}
