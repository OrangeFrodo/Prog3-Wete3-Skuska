package sk.umb.skuska.jdaxner.projekt.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CdRepository extends JpaRepository<Cd, Long> {
}
