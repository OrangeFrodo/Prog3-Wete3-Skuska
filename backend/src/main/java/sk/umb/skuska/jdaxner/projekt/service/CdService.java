package sk.umb.skuska.jdaxner.projekt.service;

import org.springframework.stereotype.Service;
import sk.umb.skuska.jdaxner.projekt.domain.*;

import java.util.List;

@Service
public class CdService {
    public CdService(CdRepository cdRepository, ZanerRepository zanerRepository) {
        this.cdRepository = cdRepository;
        this.zanerRepository = zanerRepository;
    }

    private CdRepository cdRepository;

    private ZanerRepository zanerRepository;

    public Cd addCd(CdDto dto) {
        Cd cd = new Cd();

        Zaner zaner = zanerRepository.findByNazov(dto.getZaner());

        if (zaner == null) {
            Zaner zaner1 = new Zaner();
            zaner1.setNazov(dto.getZaner());
            zanerRepository.save(zaner1);
            zaner = zaner1;
        }

        cd.setZaner(zaner);
        cd.setId(dto.getId());
        cd.setAutor(dto.getAutor());
        cd.setNazov(dto.getNazov());

        return cdRepository.save(cd);
    }

    public List<Cd> getAllCd() {
        return cdRepository.findAll();
    }
}
