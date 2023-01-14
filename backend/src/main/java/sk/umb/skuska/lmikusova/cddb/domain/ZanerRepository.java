package sk.umb.skuska.lmikusova.cddb.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ZanerRepository extends JpaRepository<Zaner, Long> {

    Zaner findByNazov(String nazov);
}
