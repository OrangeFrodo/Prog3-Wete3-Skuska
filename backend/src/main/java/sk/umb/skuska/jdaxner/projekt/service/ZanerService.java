package sk.umb.skuska.jdaxner.projekt.service;

import org.springframework.stereotype.Service;
import sk.umb.skuska.jdaxner.projekt.domain.ZanerRepository;
import sk.umb.skuska.jdaxner.projekt.domain.Zaner;

import java.util.List;

@Service
public class ZanerService {

    public ZanerService(ZanerRepository zanerRepository) {
        this.zanerRepository = zanerRepository;
    }

    private ZanerRepository zanerRepository;

    public void addZaner(Zaner zaner) {
        zanerRepository.save(zaner);
    }

    public List<Zaner> getAllZanre() {
        return zanerRepository.findAll();
    }
}
